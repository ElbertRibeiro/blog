---
slug: configure-ssh-key
title: How to configure ssh key on github?
authors: [ elbert ]
tags: [ github, gitlab, code-editor, ssh ]
---

## Checking Generated Keys

To list the existing keys, execute the command: `ls -al ~/.ssh`

## Generating SSH Key

Open the **git bash** or your Linux terminal and run the following command:

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> Note¹: Replace "your_email@example.com" with your actual email.

## Copying the Generated Key

To copy the generated key to the clipboard, use the command:

```shell
cat ~/.ssh/id_ed25519.pub. 
```

## Adding Key to GitHub

Open GitHub and go to the profile icon > Settings in the top right corner. In the user settings sidebar, click on "SSH
and GPG keys." Click on the "New SSH key" button. In the "Title" field, add a descriptive label for the new key. For
example, if you are using your personal computer, you can name this key "Personal Computer." Paste the public key from
the clipboard into the "Key" field. Click on "Add SSH key," and you're done!

## Testing Connection

Execute the following command in the terminal:

```shell
ssh -T git@github.com
```

> Note²: After executing the previous command, type "yes" in the interactive git bash terminal.