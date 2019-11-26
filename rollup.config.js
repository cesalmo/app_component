import nodeResolve from 'rollup-plugin-node-resolve';

export default [
    {
        input: {
            'comp-page1': 'page1/comp-page1.js',
            'compPage1': 'page1/src/compPage1.js'
        },
        output: {
            dir: 'esm',
            format: 'esm'
        },
        plugins: [
            nodeResolve({ preferBuiltins: false }), // or `true`

        ]
    }
];