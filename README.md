# Zadanie rekrutacyjne 
## Wstęp
Prezentowane zadanie jest częścią rekrutacji. Celem tego zadania jest zaprezentowanie moich umiejętności w zakresie HTML, CSS, SASS, JavaScript (ES6+), React (React Router), wzorców UI/UX oraz najlepszych praktyk.

## Link do aplikacji
Aplikacja jest dostępna pod adresem: [https://recruitment-task-five.vercel.app/]

## Opis aplikacji
Aplikacja jest oparta o bibliotekę React i ma na celu prezentację najważniejszych informacji dotyczących wyszukiwanych repozytoriów z GitHub. Użytkownik ma możliwość wprowadzenia frazy do wyszukiwania, a aplikacja dynamicznie wyświetla wyniki w formie tabeli. Użytkownik może oznaczyć wybrane repozytoria jako ulubione, a informacje o ulubionych repozytoriach są przechowywane w localStorage.

Aplikacja wykorzystuje publiczne API GitHub do pozyskiwania danych o repozytoriach. Wyświetlane dane obejmują ID, nazwę repozytorium, właściciela, ilość gwiazdek, datę utworzenia oraz opcję dodawania/usuwania repozytorium z ulubionych.

## Struktura aplikacji
Aplikacja składa się z następujących widoków:

Strona Główna
+ ### Ścieżka: /
Na tej stronie użytkownik może wprowadzić frazę do wyszukiwania repozytoriów.
Wyniki wyszukiwania są wyświetlane w tabeli z informacjami o repozytoriach.
Użytkownik może oznaczyć repozytorium jako ulubione.

+ ### Ulubione
Ścieżka: /favourites
Ta strona wyświetla listę ulubionych repozytoriów zapisanych w localStorage.

+ ### Widok szczegółowy
Ścieżka: /favourites/:id
Ta strona wyświetla szczegółowe informacje o wybranym ulubionym repozytorium.

+ ### 404 - Nie znaleziono
Ścieżka: /404
Ta strona jest wyświetlana dla wszystkich nieprawidłowych adresów.


### Instalacja i uruchomienie lokalne
Jeśli chcesz uruchomić aplikację lokalnie, wykonaj poniższe kroki:
Sklonuj repozytorium: git clone <adres-repozytorium>
Przejdź do folderu projektu: cd nazwa-aplikacji
Zainstaluj zależności: npm install
Uruchom aplikację w trybie deweloperskim: npm start
Aplikacja będzie dostępna pod adresem http://localhost:3000.