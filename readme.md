##  Backend django
База использована SQLite  

python: 3.9.7  
django: 4.0.3  

В виртуальное окружение инсталлируем необходимые для работы проекта пакеты:  

pip install djangorestframework  
pip install django-cors-headers  
pip install coreapi pyyaml  
pip install django-rest-swagger  


В консоли переходим в директорию проекта и стартуем проект:
python manage.py runserver

API проекта будет доступно по адресам:  
http://127.0.0.1:8000/api/openapi - page schema openapi  
http://127.0.0.1:8000/api/swagger-ui/ - page swagger-ui  
http://127.0.0.1:8000/api/categories/ - список всех категорий блюд  
http://127.0.0.1:8000/api/recipe/ - список всех рецептов блюд  
http://127.0.0.1:8000/api/recipe/<id> - Рецепт блюда <id>  



## Установка и запуск среды разработки React + Webpack

Клонировать репозиторий  
Восстановить модули: `npm install`   
Запуск СЕРВЕРА DevServer: `npm start`  


  


