import openai
import os

def generate_coordinates(prompt):
    openai.api_key = "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"

    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    temperature=0.7,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    text = (response.choices[0].text).split('\n')
    del text[:2]
    text2 = [text1.split(':') for text1 in text]
    dict1 = {}
    for list1 in text2:
        dict1[list1[0]]=list1[1]
    return dict1

def generate_img(prompt):
    OPENAI_API_KEY = "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"
    openai.api_key = OPENAI_API_KEY

    response = openai.Image.create(
    prompt=prompt,
    n=1,
    size="512x512"
    )
    image_url = response['data'][0]['url']
    return image_url