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
