#include <iostream>
#include <string>

int main() {
    const std::string correctPassword = "verlo";
    std::string input;

    std::cout << "Enter password: ";
    std::getline(std::cin, input);

    if (input == correctPassword) {
        std::cout << "Access truee\n";
    } else {
        std::cout << "Access false \n";
    }

    return 0;
}
