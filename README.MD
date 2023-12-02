Tento projekt je jednoduchý server s REST API, poskytuje základní operace pro správu blogu.
livepage: http://13.48.106.215:4000/
endpoints:

GET /api/blogs
Získá všechny dostupné blogy.

GET /api/blogs/{id}
Získá konkrétní blog podle zadaného identifikátoru (ID).

POST /api/blogs
Přidá nový blog.

DELETE /api/blogs/:id
Smaže existující blog podle zadaného identifikátoru (ID).

pozn. pro učitele: rád bych zmínil že jsem zkoušel pracovat s verzí API na githubu od učitelů, ale vyskytl se problém která když jsem chtěl o víkendu řešit tak jsem se žádné odpovědi nedostal ani teď během posledního týdne před odevzdáním, takže jsem udělal pouze backend(pri zkouseni s postmanem blbne)
