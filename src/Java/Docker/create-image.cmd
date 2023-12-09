docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhana_8-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhana_8-java/app ../../..
