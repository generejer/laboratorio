from main import addmultiplenumbers, multiplymultiplenumbers, isiteven, isitaninteger

# Test 1
def test_add_multiple_positive_integers():
    response = addmultiplenumbers([5, 7, 9])
    assert response == 21

# Test 2
def test_add_multiple_complicated_numbers():
    response = addmultiplenumbers([5, -7, 9.3])
    response = round(response, 1)
    assert response == 7.3

# Test 3
def test_multiply_multiple_positive_integers():
    response = multiplymultiplenumbers([4, 5, 6, 7])
    assert response == 840

# Test 4
def test_multiply_multiple_complicated_numbers():
    response = multiplymultiplenumbers([4, -5, 6.7])
    response = round(response, 0)
    assert response == -134

# Test 5
def test_is_six_even():
    response = isiteven(6)
    assert response == True

# Test 6
def test_is_minus_three_point_eight_even():
    response = isiteven(-3.8)
    assert response == False

# Test 7
def test_is_three_an_integer():
    response = isitaninteger(3)
    assert response == True

# Test 8
def test_is_seven_point_three_an_integer():
    response = isitaninteger(7.3)
    assert response == False

# Ejecutar los tests si se corre el archivo directamente
if __name__ == "__main__":
    test_add_multiple_positive_integers()
    test_add_multiple_complicated_numbers()
    test_multiply_multiple_positive_integers()
    test_multiply_multiple_complicated_numbers()
    test_is_six_even()
    test_is_minus_three_point_eight_even()
    test_is_three_an_integer()
    test_is_seven_point_three_an_integer()
    print("¡Todos los tests pasaron!")
