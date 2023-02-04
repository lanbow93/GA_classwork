class Person:

    def __init__(self, name, age):
        self.name = name
        self.age = age




class Teacher(Person):

    def teach(self):
        print(self.name + " teaches")

alex = Teacher("Lance", 30)


class Dog:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def bark(self):
        print(f"{self.name} barks")

## Instantiation
sparky = Dog("Sparky", 4)

print(sparky)
print(sparky.name, sparky.age)
sparky.bark()