"""
Autor: Kacper Jagodziński
Data: 2024-11-23
Description: Script that performs three tasks:
    1. Creating a list of users from Poland using list comprehension.
    2. Calculating the sum of ten elements starting from the fifth element.
    3. Generating a list of powers of 2 from 2^1 to 2^20.
"""


def filter_polish_users(users: list[dict]) -> list[dict]:
    """
    Filters users from Poland.
    It does not specify the content type of the dict to make the function more general.

    Args:
        users (list[dict]): List of dictionaries with user information.

    Returns:
        list[dict]: New list containing only users from Poland.
    """
    polish_users: list[dict] = [user for user in users if user.get("country", "").lower() == "poland"]
    return polish_users


def sum_of_elements(numbers: list, offset: int = 5, count: int = 10) -> float:
    """
    Calculates the sum of a specified number of elements in the list, starting from the given index.
    It does not specify the type of the content of the list to make the function more generic,
    it will work on int, float, numpy.float64, etc.

    Args:
        numbers (list): List of numbers
        offset (int, optional): defines how many first numbers to skip (default is 5).
        count (int, optional): Number of elements to sum (default is 10).

    Returns:
        float: Sum of the selected elements.

    Raises:
        IndexError: If the offset is out of the valid range.
    """
    # Check if the range is valid
    if not (0 <= offset <= len(numbers)):
        raise IndexError("Offset out of range.")

    start_index: int = offset - 1 if offset > 0 else 0
    end_index: int = start_index + count
    selected_elements: list = numbers[start_index:end_index]
    return sum(selected_elements)


def generate_powers_of_two(n: int = 20) -> list[int]:
    """
    Generates a list of powers of 2 from 2^1 to 2^n.

    Args:
        n (int, optional): Maximum exponent (default is 20).

    Returns:
        list[int]: List of powers of 2.
    """
    powers: list[int] = [2 ** i for i in range(1, n + 1)]
    return powers


def main():
    # Task 1: Filtering users from Poland
    users = [
        {"name": "Kamil", "country": "Poland"},
        {"name": "John", "country": "USA"},
        {"name": "Yeti"}  # Missing 'country' key
    ]

    polish_users = filter_polish_users(users)
    print("Users from Poland:")
    for user in polish_users:
        print(f" - {user['name']}")

    print("\n" + "-" * 40 + "\n")

    # Task 2: Sum of ten elements starting from the fifth
    numbers = [1, 5, 2, 3, 1, 4, 1, 23, 12, 2, 3, 1, 2, 31, 23, 1, 2, 3, 1, 23, 1, 2, 3, 123]
    try:
        total = sum_of_elements(numbers, offset=5, count=10)
        print(f"Sum of ten elements starting from the fifth: {total}")
    except IndexError as e:
        print(f"Error: {e}")

    print("\n" + "-" * 40 + "\n")

    # Task 3: Generating powers of 2
    powers_of_two = generate_powers_of_two(n=20)
    print("List of powers of 2 from 2^1 to 2^20:")
    for exponent, value in enumerate(powers_of_two, start=1):
        print(f"2^{exponent} = {value}")


if __name__ == "__main__":
    main()
