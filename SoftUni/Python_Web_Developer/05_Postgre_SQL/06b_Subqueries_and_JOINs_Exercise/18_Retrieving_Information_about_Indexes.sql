-- Retrieve information about indexes in the "public" schema
SELECT tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename ASC,
    indexname ASC;