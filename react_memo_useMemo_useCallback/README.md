# React Memo

- HOC (component -> HOC -> enhanced component)
- React.memo shallow comparison karta hai, isliye reference stability bahut important hai (useState, useMemo, useCallback)

# primitive datatypes

    Number
    String
    undefined
    Boolean
    null

# reference type

    object
    array
    fucntion


# Quick Recap

- parent jab jab render hota hai, child bhi render hota hai, bhale hi child kitna bhi expensive ho react ko koi fark nahi padta

- ye wala nature ham react memo ka use karke fix kar skte hai

- react memo ek HOC hota hai apne andar ek component leta hai and ek enhance component return karta hai

- by default ye primitive values ke sath proper tarike se work karta hai aur unnecessary rerender ko rokta hai, lekin reference kype ke sath ye expected tarike se work nahi karta (yha pe ye shallo comparision karta hai), kyunki jab jab rerender hota hai nya reference ban jata hai

- reference stability ke liye hamlog usestate, useMemo, and useCallback ka use kar skte hai

- conclusion ye hai ki, react memo mast kam karta hai lekin, ye jyada effective usememo and usecallback ke sath hota hai

- that means react memo, useMemo, useCallback ka use karke react me jyada optimizations ki ja skti hai.....

------------------------------------------------------------------------------
# useMemo()

-- Hook
-- memoize (save, cache)

cart page - too many products - total price (expensive caluclation)

expensive calculation - time^^

state --> e.c -- time^^


multiply

2*3 --> 6
4*3 --> 12
2*3 --> 6


# useMemo React ka hook hai jo expensive calculation ke result ko cache karta hai taaki unnecessary re-computation na ho.

# useMemo value ko memoize karta hai
# useCallback fn ko memoize karta hai

-----------------------------------------------------------------------------------
# useCallback

--> lifecycle, react memo, useMemo

✅ Every re-render = functions are recreated

Even if logic is same, function reference changes

# useCallback is a React hook that memoizes a function, so the same function reference is reused between renders unless dependencies change.

# thank you much


# kha kha use nahi karna hai isse:-

- function as a props pass nahi kar rhe ho tab
- small application
- light weight component

# useMemo value memoize karta hai, and useCallback function memoize kar rha hota hai...!!!!