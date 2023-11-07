Projekt dziennika elektronicznego napisany przy użyciu frameworka React.js. Używa oddzielnego serwera(API), dzięki któremu w bezpieczny sposób łączy się z bazą danych. Do przechowywania ocen, danych użytkowników, przedmiotów i ogłoszeń użyty został system MySql. Do przechowywania planu lekcji dla poszczególnych klas używany jest plik json na serwerze API. Pozwala to na prostą rozbudowę o większą ilość użytkowników oraz klas. Do uruchomienia projektu wymagany jest zainstalowany na serwerze Node.JS oraz MariaDB.

Istniejący użytkownicy:
1.
login: demo
hasło: demo
Imie Nazwisko: Jan Kowalski
Data urodzenia: 1.01.2000
Klasa: 1A
Wychowawca: Jan Mazur
2.
login: demo2
hasło: demo2
Imie Nazwisko: Filip Mazurkiewicz
Data urodzenia: 1.01.2007
Klasa: 1C
Wychowawca: Kamil Nowak

Dla każdego użytkownika wyświetlany jest inny plan lekcji(w zależności od przypisanej użytkownikowi klasy) oraz inne oceny(w zależności od użytkownika). 

Proces instalacj: 
1. Pobierz Node.Js na serwer (https://nodejs.org/en/download)
2. 