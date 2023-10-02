juri = int(input())
presentation = input()
total_average = 0
count_presentation = 0

while presentation != "Finish":
    average_assessment = sum(float(input()) for _ in range(juri))
    average_assessment /= juri
    print(f"{presentation} - {average_assessment:.2f}.")
    total_average += average_assessment
    count_presentation += 1
    presentation = input()

total_average /= count_presentation
print(f"Student's final assessment is {total_average:.2f}.")
