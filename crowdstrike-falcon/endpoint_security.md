# Endpoint Security
Endpoint rotection solution

## Falcon Sensor
```Powershell
# install
.\FalconSensor_Windows.exe /install /quiet /norestart CID=<ID>

# status
cmd /c sc.exe query csagent

# test
cmd crowdstrike_test_medium

# uninstall
CsUninstallTool.exe /quiet
CsUninstallTool.exe MAINTENANCE_TOKEN=<token> /quiet
```
