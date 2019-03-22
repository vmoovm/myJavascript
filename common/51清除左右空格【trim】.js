function ltrim(s){ return s.replace( /^(\s*|　*)/, ""); }
function rtrim(s){ return s.replace( /(\s*|　*)$/, ""); }
function trim(s){ return ltrim(rtrim(s));}