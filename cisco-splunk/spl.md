# Search Processing Language (SPL)
- https://docs.splunk.com/Documentation/SplunkCloud/9.3.2408/SearchReference/WhatsInThisManual

```spl
`comment("index - top")`
| eventcount summarize=false index=*

`comment("host - top")`
index=botsv1
| stats count by host
| sort -count

`comment("source - top")`
index=botsv1
| stats count by source
| sort -count

`comment("sourcetype - top")`
index=botsv1
| stats count by sourcetype
| sort -count

`comment("summary - source")`
index=botsv1
| stats count by host, source, sourcetype
| sort -count
```