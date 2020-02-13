### Tutaj znajdziemy więcej interaktywnych rezultatów zadań, determinujących działanie użytkownika.
##

### -zad.1
`Event`, który po najechaniu na element `parent`, pokazuje element `children`.
Drugi `Event` chowa element `children` po zjechaniu z niego.
(zadanie z poprzedniego zestawu, różniące się jedynie wyglądem na www)

#
### -zad.2
Button, z podpiętym `Eventem` który po kliknięciu w konsoli wyświetla wyraz `"It's Working!"`
(zadanie jak poprzednie, pojawiło się w poprzednim zestawieniu, a różniące się tylko wyglądem na www)
#
### -zad.3
Buttony z podpiętymi `Eventami`, kliknięcie każdego powoduje naliczenie kolejnej liczby mna liczniku.
(tak ja dwa powyższe zadania. Zostało jedynie odmiennie ostylowane)
#
### -zad.4
`Event` wspólny dla guzików, powodujący zwiększenie się wartości na liczniku o 1
#
### -zad.5
Jeden `Event` dla trzech elementów, zmieniający tła po kliknięciu na `div` 
Sposób na uzyskanie losowego koloru: 
```JavaScript
randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);)
```
#
### -zad.6
`Event` wypisujący położenie kursora, w zależności od jego miejsca na obiekcie.
(tak `globalnie` - od lewego górnego rogu okna, jak i `lokalnie` - od lewego górnego rogu obiektu)
#
### -zad.7
Metody `stopPropagation` oraz `stopImmediatePropagation` użyte w następujący sposób:
 - wywoływany event dla trzeciego i drugiego elementu, lecz nie dla pierwszego
 - wywoływane eventy dla elementu piątego i nie dla czwartego. 
#
### -zad.8
Dwa elementy pokazujące wielkość okna, nawet po jego przeskalowaniu.
#
### -zad.9
Trzy elementy zmieniające kolor tła (rodzica), po kliknięci na `Guzik` (dziecko).
Kolor uzystkany metodą losową, jak w `zad.5`
Zadanie spełnia następujące założenia:
 - jeden `Event` na wszystkie  przyciski
 - rodzic jest wyszukany zależnie od położenia `this`
 - kolor jest losowy
 
#
### -zad.10
Po kliknięciu w `Guzik` pojawia się nowy element `li`. Element ten posiada informację ile elementów jest w liście 
w chwili dodania.

#
### -zad.11
Tablica, wraz z formularzem do wypełnienia nowego zamówienia. `Event` pobierający 
informacje z inputów, oraz wprowadzający nowy wpis do tablicy

#
### -zad.12
Guzik, który po kliknięciu znika. `Event` który powoduje usunięcie po kliknięciu.

#
### -zad.13
`Event` podpięty do guzika, sprawiający usunięcie elementu, po jego kliknięciu.

#
### -zad.14
Dwie listy z elementami. Po kliknięciu w element, ten przenosi się na przestrzeń drugiej listy.

#
### -zad.15
`Event` podpięty pod guzik, powodujący usunięcie zawartości z tablicy.

##
Całość - tym razem już interaktywną, można zobaczyć na: https://mmarek.github.io/zadania_6/index.html
###Zapraszam :)