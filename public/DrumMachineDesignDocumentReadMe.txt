Drum Machine Design document

1. Components Required 

A. Drum Machine component --- under App Class or function built at html root Div.

The Drum Machine container: {req} id="drum-machine"

i. Container to hold the 9 classNamed = "drum-pad" div elements or span elements or button elements or a costum html element so class designated. 

ii. The class{Name}= "drum-pad" element will need an action event & handler for onClick or onKeyDown or maybe another onHover{?} to run code that plays an audio component which has a corresponding Id or key that plays a sound file according to the corresponding div,span,button, custom element acted upon and as well as the corresponding keyboard key pressed.

Each Drum Pad [] should probably have the following properties
i.  keyPressed : a (number)
ii. eActionElement - passed event - "e" - "a string"
iii.soundUrl - a location for sound file to play()
iv. displayDescriptor or name - to be shown in #display div.

Test Requirements to pass
#1: Should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

#2: Within #drum-machine I can see an element with a corresponding id="display" {currentname of drum-pad}

#3. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

#4. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

#5. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

#6 When I press the "trigger key" associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

#7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
{in the event handler code this can be assigned and will be unique to the parament passed.}
Optional : add a timestamp to the displayed event descriptor.



* Special refence Notes
Event Object
All event objects in the DOM are based on the Event Object.
Therefore, all other event objects (like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.
Properties needed in this exercise
currentTarget : Returns the element whose event listeners triggered the event

target : Returns the element that triggered the event
type: Returns the name of the event

timeStamp : Returns the time (in milliseconds relative to the epoch) at which the event was created

Event Types
These event types belongs to the Event Object:

change :The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)

play : The event occurs when the media has been started or is no longer paused














