all_words = input()
searched_palindrome = input()

original_list_of_words = all_words.split()

list_of_palindromes = [word for word in original_list_of_words if word == word[::-1]]

print(list_of_palindromes)
print(f"Found palindrome {list_of_palindromes.count(searched_palindrome)} times")
