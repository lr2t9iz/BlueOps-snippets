# Dev Tools
- https://www.elastic.co/guide/en/kibana/current/devtools-kibana.html

> ≡ > Management > Dev Tools

## Console
```sh
# list all indices (data-stream)
GET /_cat/indices/.ds-*?v&s=docs.count:desc&h=index,docs.count,store.size
```

### Kibana API
```sh
# get rule
GET kbn:api/detection_engine/rules?id=<ID>

# new rule 
POST kbn:api/detection_engine/rules
{ RULE JSON_FORMAT }

# update rule 
PUT kbn:api/detection_engine/rules
{ RULE JSON_FORMAT }
```