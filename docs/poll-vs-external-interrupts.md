---
id: poll-vs-external-interrupts
title: Poll vs external interrupts
sidebar_label: Poll vs external interrupts
---

## Poll

There are many ways in which a microcontroller is able the detect the state of a button. The most common 
way to do this is by polling the button. This means that **the microcontroller will be continuously reading the button signal**. This approach is shown below

:::note Note

All code in this section is shown only for teaching purposes. EasyButton library will do most of this work for you.

:::

```cpp
void loop() 
{
  // put your main code here, to run repeatedly:
  if (digitalRead(BUTTON_PIN) == LOW)
    Serial.println("Button Pressed");
}
```
This works in most cases, but **it isn't the most efficient solution**.  

```cpp
void loop() 
{
  // put your main code here, to run repeatedly:
  delay(SECONDS*1000);
  if (digitalRead(BUTTON_PIN) == LOW)
    Serial.println("Button Pressed");
}
```
For example, in the code shown above, the microcontroller won't be able to detect the state of the button while the delay its being executed. As a consequence, it is pretty probable that some state changes couldn't be detected. In order to avoid this, external interrupts must be used.  

## External interrupts  
External interrupts **are used to detect a state change in a more efficient way than poll system**. This is because **the event is detected by hardware and not by software**. This means that, even the microcontroller could be doing other tasks like delay in previous example, it will be able to detect the event.  

External interrupts link a function to an event. In order to define an external interrupt, is needed:  

* A microcontroller pin which will detect the event
* A trigger condition  
* An interrupt service routine  

Pins which can be used by external interrupts depend on the microcontroller used, it is your responsability to connect the button to one of these pins.

The most commons trigger conditions are:  
* FALLING: Interrupt is triggered when occurs a falling edge, this happens when signal goes from HIGH to LOW
* RISING: Interrupt is triggered when occurs a rising edge, this happens when signal goes from LOW to HIGH
* CHANGE: Interrupt is triggered when occurs a falling edge or a rising edge

Now we can solve the initial problem in a more efficient way. The microcontroller will run the `buttonPressed()` function when a falling edge will be detected on pin `BUTTON_PIN`.

```cpp
attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), buttonPressed, FALLING);
```

A 'flag' is activated inside the `buttonPressed` function. This flag indicates that the event was detected.
```cpp
void buttonPressed()
{
  wasPressed = true;
}
```
In the main program, after executing delay, the flag value is readed.
```cpp
void loop()
{
  // put your main code here, to run repeatedly:
  delay(1000*SECONDS);
  if (wasPressed)
  {
    Serial.println("Button was pressed");
    wasPressed = false;
  }
}
```
This solution is more efficient than the previous one based on 'poll system' because all events will be detected. Every time that a falling edge occurs on `BUTTON_PIN`, the microcontroller will execute the interrupt service routine and because of this your main program will know each time the button was pressed.  

### Things to consider with the use of interrupts
* Inside an interrupt service routine, most of timing functions won't work as expected (millis, delay, etc). This is because this functions use interrupt service routines which can't be executed while an external interrupt is being executed.
* Interrupt service routines should be as shorts as possible.

