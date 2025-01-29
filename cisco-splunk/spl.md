# Search Processing Language (SPL)
- https://docs.splunk.com/Documentation/SplunkCloud/9.3.2408/SearchReference/WhatsInThisManual

```spl
`comment("index - top")`
| eventcount summarize=false index=*

`comment("source - top")`
index=botsv1
| stats count by source
| sort -count

`comment("sourcetype - top")`
index=botsv1
| stats count by sourcetype
| sort -count
```