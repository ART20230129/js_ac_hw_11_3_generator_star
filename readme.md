[![Build status](https://ci.appveyor.com/api/projects/status/f4pvl804dtskxa72?svg=true)](https://ci.appveyor.com/project/ART20230129/js-ac-hw-4-1-clearfunction)

# Генераторы (задача со звёздочкой)

Важно: данная задача не является обязательной
Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" Symbol.iterator. Напишите функцию canIterate, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, true/false.

Примеры использования:

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true