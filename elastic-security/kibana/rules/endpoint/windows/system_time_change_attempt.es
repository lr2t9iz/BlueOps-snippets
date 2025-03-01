{
  "enabled": true,
  "rule_id": "b3f3c5d4-9c34-4d23-93f1-8a6f5d09c5a6",
  "author": [
    "lr2t9iz"
  ],
  "index": [
    ".ds-logs-system.security-*"
  ],
  "type": "query",
  "language": "kuery",
  "query": "event.code : \"4616\" AND NOT winlog.event_data.SubjectUserName : (\"LOCAL SERVICE\" OR *$)",
  "name": "Windows System Time Change Attempt",
  "description": "Detects attempts to change the system time, excluding changes made by the LOCAL SERVICE account. Event ID 4616 is generated when the system time is modified.",
  "severity": "medium",
  "risk_score": 75,
  "tags": [
    "OS: Windows"
  ],
  "references": [
    "https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4616"
  ],
  "false_positives": [
    "Legitimate administrative actions"
  ],
  "setup": "",
  "note": "## Triage and analysis\r\n- Verify if the time change was initiated by an authorized administrator.\r\n- Check for potential correlation with unauthorized access attempts.\r\n- Review system logs for anomalies before and after the event.",
  "max_signals": 100,
  "interval": "2m",
  "meta": {
    "from": "10s"
  },
  "from": "now-130s",
  "threat": [
    {
      "framework": "MITRE ATT&CK",
      "tactic": {
        "id": "TA0005",
        "name": "Defense Evasion",
        "reference": "https://attack.mitre.org/tactics/TA0005"
      },
      "technique": []
    }
  ]
}
