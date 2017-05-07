---
layout: post
title:  "Toggle Mind Boggle"
author: billychiu
date:   2017-02-01
categories: toggle design RES
description: I guess the main take away is that design is hard.
image: /favicons/default.png
---

Apple released earnings, and they're not half bad!

In celebration, here's a post about toggles.

On an iPhone, in the settings app, on the very top of the list, one's eyes start on the left side of the screen and see a little airplane icon. It is flat, composed out of orange pixels, white pixels, and nothing in between (except maybe some-anti aliasing). Simple. Effective. It's been roughly this way since iOS 7, where Apple made the decision that skeumorphic design, or real-world-inspired-design, wasn't cutting it. And so, [these](http://www.cultofmac.com/231380/heres-what-the-all-new-ios-7-icons-look-like-next-to-their-ios-6-counterparts-image/) are the changes Apple made to icons, making them from the plushy three dimensional things they were before to the paper-thin "material" things they are now.

To the right of that pretty airplane is text.

"Airplane Mode". Nice big sans-serif font. Great stuff. No confusion about what it does or anything.

Now with the icon and the text, I generally don't see anybody screw up. There really is no way to screw up except to maybe click the Airplane icon (nothing will happen).

But nobody does that. Especially not when there is a pretty circle surrounded by faintish shadows inside the outline of a pill to the right.

That thing is supposed to be a toggle.

I swear I don't see the resemblence. We all have been conditioned to see that or variations of that and go "Oh! Toggle!"

This attention grabbing thing that our eyes naturally end up on, after going from left to right, this toggle, is what my parents almost always mess up on. It's a really small mess up. Heck, I think it is more of Apple's mess up, honestly. They swipe the toggle.

I'm almost certain the toggles that look like Apple's toggles in Settings are NOT meant to be swiped. They are NOT meant to be swiped. [NO SWIPEY](https://www.youtube.com/watch?v=AarHxXD_vKY). You know you aren't supposed to swipe, because although it works, the little circle spazzes out as your finger flicks across the screen. Holding down the toggle makes the circle fatten a bit, but it does not reciprocate the slight movements of your finger. Clearly, clicking the toggle is the only viable action and is what overlord Apple intended for us to do.

But this is not intuitive.

Toggles as a concept are really not that intuitive. When in our lives do we ever see a horizontal toggle anyways? Better yet, when do we see a pretty-circle-surrounded-by-faintish-shadows-inside-the-outline-of-a-pill sort of toggle.

And if I did see a toggle of that same sort in the real world, why would it be so small? Why would it have to be flicked? Why would the handle part of that toggle change it's size?

Let's harp on another aspect of the toggle.

One thing that Apple does get right is letting us know, from the green color of the toggle as opposed to the white color of the toggle, that "Airplane Mode" is on. It's pretty, it's pretty intuitive, and it works for most use cases of a toggle. Most.

But what if, instead of "On" and "Off", you were switching between, say, "Day" or "Night". What if you were choosing between "Thumb up" or "Thumb down".

Apple has other UI elements for such situations, so I'll ditch iOS for another example.

Let's talk about Reddit Enchancement Suite's (RES for short) toggles. RES uses toggles for "Day"/"Night" and "Mute/Unmute" and all sorts of other things. At the time, their solution was to write the text on both sides of the toggle, so either "On" or "Off" would be lit up. It's not a bad solution, at least for the English language.

However, when translating RES, they found out "On" and "Off" weren't such short, relatively evenly-spaced words in languages such as Spanish. 

{% include partials/imagePartial.html src="/media/toggleimage.png" width="736px" height="558px" %}

The initial thought was that we could just replace On/Off with ✓/✕. However, ✓/✕ are not universal symbols! ✕ could be construed as "On". In some other cultures "o" would signify something as being selected. In those cultures, ✓ would replace the ✕ as being wrong.

This ✓/✕ solution didn't work for another reason. It was just a bandaid for a specific translation. What if the same issue arose with "Day"/"Night" or "Mute/Unmute"?

As such, the answer for the problem was there for all the world to see in [Windows 10](https://mspoweruser.com/windows-10-build-10108-reveals-new-toggle-button-design/).

And this was RES' new toggle.

{% include partials/imagePartial.html src="/media/RESToggles.png" width="888px" height="380px" %}


