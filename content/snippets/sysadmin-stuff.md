---
title: Sysadmin stuff
description: Sysadmin stuff 
tags: ["linux", "sysamdin"]
---

## Disk space

Use `df` / `disk-free` to check for free disk space:

```console
df -h
```

## Check file permissions

```console
ls -ld <directory>
```

## Create directories and forcing parents to be created

```console
mkdir -p /parent/child
```

## System info

Use `neofetch`.

```console
sudo apt install neofetch
neofetch
```
