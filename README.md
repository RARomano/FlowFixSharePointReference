# FlowFixSharePointReference

```
  _____   _                      _____   _                      
 |  ___| | |   ___   __      __ |  ___| (_) __  __   ___   _ __ 
 | |_    | |  / _ \  \ \ /\ / / | |_    | | \ \/ /  / _ \ | '__|
 |  _|   | | | (_) |  \ V  V /  |  _|   | |  >  <  |  __/ | |   
 |_|     |_|  \___/    \_/\_/   |_|     |_| /_/\_\  \___| |_|   
                                                                
```

Everytime you'd have to migrate something that is related with SharePoint, you'd have to deal with a GUID issue. Migrating artifacts between environments is never an easy task and the same issues we've ever encountered on SharePoint, still happens nowadays within Flow.

This project will facilitate moving a flow from one environment to another and keep all SharePoint related actions working.

## Status
The project is in a very early stage, I just spent a couple hours building the base of it and there is still a long way to go. Contributions are more than welcome.

For now, the only command available is to list all the url of SharePoint sites used through SharePoint actions in Flow and its list IDs, so one can manually fix them later. The idea is to provide an auto fix in future versions.

## Running the project
Clone the repo and then follow the steps below:

```bash
npm install
npm run create
```

afterwards, you'd be able to run from the terminal:

```
flowfixer -l ~/FLOWFile.json 
```
