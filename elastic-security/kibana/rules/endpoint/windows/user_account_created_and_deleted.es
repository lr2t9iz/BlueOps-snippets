{
  "enabled": true,

  "rule_id": "70114da8-d2fe-461a-b990-3664cc886deb",
  "author": [ "lr2t9iz" ],
  "index": [ ".ds-logs-system.security-*" ],
  "type": "eql",
  "language": "eql",
  "query": """// This rule detects the creation and subsequent deletion of a user account within 1 hour
sequence by winlog.event_data.TargetUserName with maxspan=1h
[iam where event.code == "4720"]
[iam where event.code == "4726"]""",

  "name": "Windows User Account Created and Deleted Within 1 Hour",
  "description": "This rule detects the creation and subsequent deletion of a user account within a 1-hour. Such activity may indicate suspicious behavior, including privilege abuse, account evasion, or administrative errors.",
  "severity": "medium",
  "risk_score": 83,
  "tags": [ "OS: Windows" ],
  "references": [ ],
  "false_positives": [ ],
  "setup": """## Setup""",
  "note": """## Triage and analysis""",
  "max_signals": 100,

  "interval": "60m",
  "meta": { "from": "1m" },
  "from": "now-61m"
}