# Guidelines

* Never commit or push directly to the main branch. Always create a new branch and submit a pull request when the work is complete.
* Branches and commits should have a type:
  * feat: a new feature
  * fix: a bug fix
  * task: a non-feature task
* Branches should follow the naming convention `<type>/<Jira key>-<name>`. Names should be concise and descriptive. 
  * e.g. `fix/SMU-2-map`
* Commits should follow the naming convention `(<Jira issue key>) <type>: <message>`. 
  * e.g. `(SMU-2) fix: map page not loading`
  * Use `(untracked)` for commits that do not relate to a Jira issue.

# Command reference

## Basic

Clone a repository
```
git clone <url>
```

Display repository status

*Shows which branch is currently active, which files have changes, which files are staged, etc.*
```
git status
```

*"Staging" means to specify that a file should be included in the next commit*

Stage a single file
```
git add <file path>
```

Stage a directory

*Works recursively (includes all sub directories and files)*
```
git add <directory path>
```

Stage everything
```
git add .
```

Show diff
```
git diff <file or directory path>
```

Show diff of everything
```
git diff .
```

Revert a file
```
git restore <file or directory path>
```

Revert everything
```
git restore .
```

Make a commit
```
git commit -m "<commit message>"
```

Push commit(s) to remote branch
```
git push
```

Push commit(s) to new remote branch

*`<branch name>` should be same as the local branch name*
```
git push -u origin <branch name>
```

Automatically set upstream (avoid specifying `-u` each time)
```
git config --global push.autoSetupRemote true
```

## Working with branches

Create a new local branch and switch to it
```
git checkout -b <branch name>
```

Switch to a different local branch
```
git checkout <branch name>
```

Show local branches
```
git branch
```

Delete a local branch
```
git branch -d <branch name>
```

Fetch a remote branch
```
git fetch origin <branch name>
```

Merge a remote branch into a local branch

*This is useful for merging a remote into your local. It will merge into the currently checked out branch.*
```
git merge origin/<branch name>
```

Rebase a branch

*This sets the base of your branch to the tip of another branch (usually main). This is useful when a branch was created after some changes were merged into main, to avoid re-merging these changes.*

**Don’t try this unless you know what you are doing!**
```
git rebase -s recursive -X ours main
```

*This action usually requires a force push to reconcile the divergent branch histories.*
```
git push --force
```
