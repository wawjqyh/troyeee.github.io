# source map

当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会直接指向到 bundle.js。你可能需要准确地知道错误来自于哪个源文件，所以这种提示这通常不会提供太多帮助

为了更容易地追踪 error 和 warning，JavaScript 提供了 source map 功能，可以将编译后的代码映射回原始源代码
