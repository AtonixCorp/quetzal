import requests, json, datetime, time, re

project_id = 499482
api_key = "ei_586daacbde00ea5b3895c2108b6a0eb45cf06019a361ca32" # YOUR API KEY
deploy_type = "zip" # CAN CHANGE TO DIFFERENT TYPE

def build_model():
    url = f"https://studio.edgeimpulse.com/v1/api/{project_id}/jobs/build-ondevice-model"
    querystring = {"type": deploy_type}
    payload = {"engine": "tflite-eon"}
    headers = {
        "x-api-key": api_key,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    response = requests.request("POST", url, json=payload, headers=headers, params=querystring)
    body = json.loads(response.text)
    if (not body['success']):
        raise Exception(body['error'])
    return body['id']

def get_stdout(job_id, skip_line_no):
    url = f"https://studio.edgeimpulse.com/v1/api/{project_id}/jobs/{job_id}/stdout"
    headers = {
        "x-api-key": api_key,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    response = requests.request("GET", url, headers=headers)
    body = json.loads(response.text)
    if (not body['success']):
        raise Exception(body['error'])
    stdout = body['stdout'][::-1] # reverse array so it's old -> new
    return [ x['data'] for x in stdout[skip_line_no:] ]

def wait_for_job_completion(job_id):
    skip_line_no = 0

    url = f"https://studio.edgeimpulse.com/v1/api/{project_id}/jobs/{job_id}/status"
    headers = {
        "x-api-key": api_key,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    while True:
        response = requests.request("GET", url, headers=headers)
        body = json.loads(response.text)
        if (not body['success']):
            raise Exception(body['error'])

        stdout = get_stdout(job_id, skip_line_no)
        for l in stdout:
            print(l, end='')
        skip_line_no = skip_line_no + len(stdout)

        if (not 'finished' in body['job']):
            # print('Job', job_id, 'is not finished yet...', body['job'])
            time.sleep(1)
            continue
        if (not body['job']['finishedSuccessful']):
            raise Exception('Job failed')
        else:
            break

def download_model():
    url = f"https://studio.edgeimpulse.com/v1/api/{project_id}/deployment/download"
    querystring = {"type": deploy_type}
    headers = {
        "x-api-key": api_key,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    response = requests.request("GET", url, headers=headers, params=querystring)

    d = response.headers['Content-Disposition']
    fname = re.findall("filename\*?=(.+)", d)[0].replace('utf-8\'\'', '')

    return fname, response.content

if __name__ == "__main__":
    job_id = build_model()
    print('Job ID is', job_id)
    wait_for_job_completion(job_id)
    print('Job', job_id, 'is finished')
    bin_filename, bin_file = download_model()
    print('Output file is', len(bin_file), 'bytes')
    with open(bin_filename, 'wb') as f:
        f.write(bin_file)
    print('Written job output to', bin_filename)