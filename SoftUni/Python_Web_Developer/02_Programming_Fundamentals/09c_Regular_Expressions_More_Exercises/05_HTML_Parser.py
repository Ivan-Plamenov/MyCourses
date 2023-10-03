import re

re_title = r"<title>([^<>]*)</title>"
re_body = r"<body>.*<\/body>"
re_filter_body = r">([^><]*)<"

html_string = input()

title = re.findall(re_title, html_string)
body = re.findall(re_body, html_string)
filter_body = re.findall(re_filter_body, body[0])

content = "".join(filter_body)
content = content.replace("\\n", "")

print(f"Title: {title[0]}")
print(f"Content: {content}")
