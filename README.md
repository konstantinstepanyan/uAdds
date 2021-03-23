# uAdds

Last commit: 
Now JS directly sets each twin a grid-area property. Previously, it was installed directly and therefore did not work correctly, and then I had to write separate styles for the twins (100 pieces). Now JS sets this property via the STYLE attribute (inline) and no TWINS.CSS file is needed.
Previously, there could be only 100 table rows, now there can be infinity. Saving space 38-48kb.

Последний коммит:
Теперь JS напрямую устанавливает каждому двойнику пункта таблицы свойство grid-area. Раньше он устанавливался напрямую через js и поэтому работал некорректно, а потом пришлось писать файл twins.css для близнецов (100 штук было прописано). Теперь JS устанавливает это свойство через атрибут STYLE (встроенный) для каждой копии раздела таблицы, и файл TWINS.CSS не требуется.
Раньше могло быть только 100 строк таблицы, теперь может быть бесконечность. Экономия места 38-48кб.
