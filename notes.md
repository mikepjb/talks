started @ 14:12

shorter story in the middle

gets worse as we sub-package

"that doesn't really matter becausej of the conflict, it's not great DX"     

"aliasing is another thing to take care of, these packages already have names,
people name the aliases inconsistently.. it becomes a right faff"

so I had this idea

-- first part makes sense, second part less so
    - you can't put the packages in the pacckages that use them!

- give example of consumer interface
    - in payments we know how payments methods, work, how they differ

"the second thing we can do is to flatten our packages"

"over here you can see this in action"
- hidden benefit doesn't actually create a cyclic import!

"so we've been talking at the package interface layer, but what's underneath?"

"in this case I'm choosing something like MVC but with less abstraction -
naming one of the files postgres

---

"at this point I thought it would be good to copy someone's homework and get a
better feel for how this problem gets solved" - so I had a look at the stdlib,
it's a well known source that's loved by many gopher's precisely because it's
rock solid and easy to work with (for the most part)

- I have 3 examples here to give a feel for the kind of stuff I saw going on


