---
id: api-onSequence
title: onSequence
sidebar_label: onSequence
---

Triggers a callback function when the Button presses matches the given sequence pattern. This method takes three parameters as arguments. **The first argument** is the number of times to press the Button in order to trigger the sequence event. **The second argument** is the timeout in which the sequence has to reproduce in order to trigger the sequence event. **Third argument** is the callback function to be called.

```c++
int number_of_presses = 5;	// Number of presses for the sequence
int sequence_timeout = 2000;	// Sequence timeout
button.onSequence(number_of_presses, sequence_timeout, onSequenceMatchedCallback);
```