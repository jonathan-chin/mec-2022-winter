# TTP 2022 Winter Project  2: Committedly Stupid
## Learning Verson Control through Gaming

---

# Background

Patently Stupid is a popular party game from Jackbox Games where players make up inventions to solve ridiculous problems. Then, they vote and award points to inventions that are ingenious or funny or clever or ... Here's an example:

Problem: I'm diabetic and have a fear of bats
Solution: Vampire Pinata! Punch out Dracula **and** spike your glucose levels!

![](https://play-lh.googleusercontent.com/L0LRJKiKVoj1mbNP17SuYqYY0mS3xLBAVWj_mdDivrY2GDHKqtTKjBCLR6N6jP2S-Q=w3840-h2024-rw)

---

# Variation

Instead of Jackbox, we'll be using the git workflow to play. Here's how:

- A prompt will be distributed through a single file in a main repo
- Students will brainstorm an answer and submit the change through a merge request
- A judge will pick the best / funniest / cleverest answer and merge it into main
- All other requests will be rejected
- The student with the most merged branches wins

---

# Workflow 1/2

To submit an answer to a prompt, you will need to:

1. `git checkout main` to switch to the main branch
2. `git pull origin main` to receive the latest master code and prompt
3. `git checkout -b PROBLEM_NUMBER_NAME` to create a new branch for your answer
4. edit the file to add your answer
5. `git add game.md` to stage the changes to your local git repo
6. `git commit -m 'COMMIT MESSAGE'` to commit those changes to your local repo
7. `git push origin prompt_number_name` to send those changes to github
8. submit a pull request on github.com

---

# Workflow 2/2

This general workflow of checking out main, forking your own branch, committing and pushing changes, and then submitting a pull request is a **very** common workflow that you'll be doing as a software developer. The only difference is that today, you'll be pulling, pushing, and merging very quickly whereas in the real world, it might be days, weeks, or even months between merges.

---

# Let's Play!
