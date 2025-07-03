#include <iostream>
#include <string>
#include <vector>
#include <cstring>
#include <limits>

std::string decrypt(const std::vector<uint8_t>& enc, uint8_t key) {
    std::string out;
    out.reserve(enc.size());
    for (uint8_t b : enc) {
        out.push_back(b ^ key);
    }
    return out;
}

bool secureCompare(const std::string& a, const std::string& b) {
    if (a.size() != b.size()) return false;
    volatile uint8_t result = 0;
    for (size_t i = 0; i < a.size(); ++i) {
        result |= a[i] ^ b[i];
    }
    return result == 0;
}

int main() {
    const std::vector<uint8_t> encrypted = {0x17, 0x00, 0x1f, 0x07, 0x00};
    const uint8_t key = 0x55;
    const std::string correct = decrypt(encrypted, key);

    std::string input;
    const int maxAttempts = 3;
    int attempt = 0;

    while (attempt < maxAttempts) {
        std::cout << "Enter password: ";
        std::getline(std::cin, input);

        if (secureCompare(input, correct)) {
            std::fill(input.begin(), input.end(), '\0');
            std::cout << "Access truee\n";
            return 0;
        } else {
            std::fill(input.begin(), input.end(), '\0');
            ++attempt;
            std::cout << "Access false\n";
        }
    }

    std::cout << "Too many attempts. Access locked.\n";
    return 1;
}
