# typescript-playground
### Messing Around with TypeScript

Install TypeScript Globally:
- `npm install -g typescript`

To Compile Your Results:
- `tsc my_file_name.ts`

Config Options stored in: 
- `tsconfig.json`

Config Operates Like:


Config Notes:
- A `tsconfig.json` file is permitted to be completely empty, which compiles all files included by default (as described above) with the default compiler options.

- Setting a top-level property compileOnSave signals to the IDE to generate all files for a given tsconfig.json upon saving. This feature is currently supported in Visual Studio 2015 with TypeScript 1.8.4 and above, and atom-typescript plugin. Ex:
```
{
   "compileOnSave": true,
   "compilerOptions": {
       "noImplicitAny" : true
   }
}
```

- You will often need to add types to your project based on the package being used. Here is an example to add react typing to a project:
`npm install react @types/react`

Some Comments:
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”.

It may be best practice to have a types (interface) directory, but for smaller typing keeping them paired with the corresponding component directly seems reasonable.

If we were keeping a type directory with one type stored, we would export by doing the following:
```
export default interface User{
        name: string;
        age: number;
        address: string;
        dob: Date;
}
```