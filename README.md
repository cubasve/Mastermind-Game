# Mastermind

### React Components
![image](https://user-images.githubusercontent.com/62129720/111056415-c0aee380-844c-11eb-8dec-af0be27178a6.png)

![image](https://user-images.githubusercontent.com/62129720/111056598-467f5e80-844e-11eb-8d6b-0ad622b3e087.png)

### State
![image](https://user-images.githubusercontent.com/62129720/111056465-f784f980-844c-11eb-83fa-91a179dcd9eb.png)


### handlePegClick method's process
- **currentGuessIndex**: the row index (in this case, it's the 1st row with an index of 0)
- **guessesCopy**: ARRAY - copy of the guesses array
```javascript
[{
    code: [0, null, null, null],
    score: { perfect: 0, almost: 0 },
}]

```
- **guessCopy**: OBJECT - copy of the guess - the specific index of the current guess
```javascript
{
    code: [0, null, null, null],
    score: { perfect: 0, almost: 0 },
}

```
- **codeCopy**: copy of the code the user is guessing
- **pegIndex**: peg's current index (in this case, it's 0 since it's the 1st peg)
- **codeCopy[pegIndex]**: color array's index (blue is 0, yellow is 1, red is 2 and purple is 3)

![image](https://user-images.githubusercontent.com/62129720/111056510-65312580-844d-11eb-9652-2c7a389e0a54.png)

![image](https://user-images.githubusercontent.com/62129720/111056585-1fc12800-844e-11eb-96ab-4f60f6069483.png)

![image](https://user-images.githubusercontent.com/62129720/111056590-2fd90780-844e-11eb-8370-03c515529a8e.png)

### handleScoreClick method's process

- 1st row's guess:
![image](https://user-images.githubusercontent.com/62129720/111056617-67e04a80-844e-11eb-9c71-bfcd45681ea0.png)

![image](https://user-images.githubusercontent.com/62129720/111056623-76c6fd00-844e-11eb-8ba5-eea84fb5dfa2.png)

![image](https://user-images.githubusercontent.com/62129720/111056646-a5dd6e80-844e-11eb-8fe0-c97e2df81fa9.png)

- 2nd row's guess:
![image](https://user-images.githubusercontent.com/62129720/111056633-85adaf80-844e-11eb-8764-2823e874b38c.png)

![image](https://user-images.githubusercontent.com/62129720/111056722-52b7eb80-844f-11eb-8080-354b4abfd3b5.png)

- 3rd row's guess:
![image](https://user-images.githubusercontent.com/62129720/111056735-70855080-844f-11eb-9e1f-4d767101dcf4.png)

![image](https://user-images.githubusercontent.com/62129720/111056741-7bd87c00-844f-11eb-90e3-1be5083574af.png)

![image](https://user-images.githubusercontent.com/62129720/111056750-87c43e00-844f-11eb-972e-067d0a9fc638.png)

