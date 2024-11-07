/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "My Project", "index.html", [
    [ "binary", "md_docs_2binary.html", null ],
    [ "Sensitivity", "md_docs_2developer__notes.html", [
      [ "Blocker", "md_docs_2developer__notes.html#autotoc_md1", null ],
      [ "Matcher", "md_docs_2developer__notes.html#autotoc_md2", null ],
      [ "Value matcher", "md_docs_2developer__notes.html#autotoc_md3", null ],
      [ "Issues", "md_docs_2developer__notes.html#autotoc_md4", [
        [ "Fixed at this stage", "md_docs_2developer__notes.html#autotoc_md5", null ],
        [ "To be careful", "md_docs_2developer__notes.html#autotoc_md6", null ]
      ] ]
    ] ],
    [ "Datasets:", "md_docs_2exp.html", [
      [ "Megallen:", "md_docs_2exp.html#autotoc_md8", null ],
      [ "SIGMOD Programming Contest", "md_docs_2exp.html#autotoc_md9", null ],
      [ "Competitors", "md_docs_2exp.html#autotoc_md10", null ],
      [ "Metrics", "md_docs_2exp.html#autotoc_md11", null ],
      [ "Plan", "md_docs_2exp.html#autotoc_md12", null ],
      [ "Results", "md_docs_2exp.html#autotoc_md13", [
        [ "Recall / Output Size on Megallen Structured Data", "md_docs_2exp.html#autotoc_md14", [
          [ "Sparkly-Auto", "md_docs_2exp.html#autotoc_md15", null ],
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md16", null ]
        ] ],
        [ "Recall / Output Size on Megallen Textual Data", "md_docs_2exp.html#autotoc_md17", [
          [ "Sparkly", "md_docs_2exp.html#autotoc_md18", null ],
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md19", null ]
        ] ],
        [ "Recall / Output Size on Megallen Dirty Data", "md_docs_2exp.html#autotoc_md20", [
          [ "Sparkly-Auto", "md_docs_2exp.html#autotoc_md21", null ],
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md22", null ]
        ] ],
        [ "Recall / Output Size on SIGMOD Programming Contest Hidden Data", "md_docs_2exp.html#autotoc_md23", [
          [ "Sparkly-Auto", "md_docs_2exp.html#autotoc_md24", null ],
          [ "Champion Solution", "md_docs_2exp.html#autotoc_md25", null ],
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md26", null ]
        ] ],
        [ "Recall / Output Size on SIDMOG Programming Contest New Data", "md_docs_2exp.html#autotoc_md27", [
          [ "Sparkly-Auto", "md_docs_2exp.html#autotoc_md28", null ],
          [ "Champion Solution", "md_docs_2exp.html#autotoc_md29", null ],
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md30", null ]
        ] ],
        [ "Runtime / Scalability on SIGMOD Programming Contest New Data (last 6)", "md_docs_2exp.html#autotoc_md31", [
          [ "Similarity Join Blocker", "md_docs_2exp.html#autotoc_md32", null ]
        ] ],
        [ "Orthogonal Test on SIGMOD Programming Contest Hidden Data", "md_docs_2exp.html#autotoc_md33", [
          [ "Sparkly + TA TopK", "md_docs_2exp.html#autotoc_md34", null ],
          [ "Similarity Join Blocker + TF-IDF TopK", "md_docs_2exp.html#autotoc_md35", null ]
        ] ]
      ] ],
      [ "Appendix", "md_docs_2exp.html#autotoc_md36", [
        [ "A. Datasets Statics", "md_docs_2exp.html#autotoc_md37", [
          [ "RS Join", "md_docs_2exp.html#autotoc_md38", null ],
          [ "Self Join", "md_docs_2exp.html#autotoc_md39", null ]
        ] ]
      ] ]
    ] ],
    [ "lib", "md_docs_2lib.html", null ],
    [ "modifications", "md_docs_2modifications.html", null ],
    [ "Overview", "md_docs_2simjoin.html", [
      [ "Appendix", "md_docs_2simjoin.html#autotoc_md41", [
        [ "A. Adaptive Grouping in Set Join", "md_docs_2simjoin.html#autotoc_md42", [
          [ "Jaccard", "md_docs_2simjoin.html#autotoc_md43", null ],
          [ "Cosine", "md_docs_2simjoin.html#autotoc_md44", null ]
        ] ]
      ] ]
    ] ],
    [ "General", "md_docs_2TODO.html", [
      [ "Optimization", "md_docs_2TODO.html#autotoc_md46", null ]
    ] ],
    [ "README", "md_examples_2README.html", null ],
    [ "End-to-End Entity Matching System", "md_README.html", [
      [ "Introduction", "md_README.html#autotoc_md48", null ],
      [ "The System Design", "md_README.html#autotoc_md49", [
        [ "Prerequisite", "md_README.html#autotoc_md50", [
          [ "Python", "md_README.html#autotoc_md51", null ],
          [ "C++", "md_README.html#autotoc_md52", null ]
        ] ],
        [ "How to build?", "md_README.html#autotoc_md53", null ],
        [ "How to run the system?", "md_README.html#autotoc_md54", null ],
        [ "How to port parts of out system in your EM solution?", "md_README.html#autotoc_md55", null ],
        [ "Other documents", "md_README.html#autotoc_md56", null ]
      ] ],
      [ "Acknowledgement", "md_README.html#autotoc_md57", null ],
      [ "Platform", "md_README.html#autotoc_md58", null ],
      [ "Contact", "md_README.html#autotoc_md59", null ],
      [ "TODO", "md_README.html#autotoc_md60", null ],
      [ "BUGS:", "md_README.html#autotoc_md61", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"CMakeFiles_23_826_85_2CompilerIdCXX_2CMakeCXXCompilerId_8cpp.html",
"classGroupInterchangeable.html#a84773ebf5cae6ab2ce8289b4204abccc",
"classSetJoin.html#a25e52718f19380ea8c877a12280e8314",
"classStringJoinParallel.html#abac87f1da637acc1c824397ab8f7d496",
"classsimjoin__entitymatching_1_1utils_1_1datasets_1_1Dataset.html#a56371f52e575c10743adac21656eb143",
"dir_10d6382f863d970095a0211f6b05d096.html",
"hierarchy.html",
"namespacesimjoin__entitymatching_1_1sampler_1_1sample.html#aa5d0cd44899edce810531af8394b9b4d",
"simfunc_8h_source.html",
"test__block_8py.html#a7ed06da5e994163c1877267f80fbb5fe"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';