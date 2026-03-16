/** Shallow Module */

function readRaw(path: string):Uint8Array {
    return Bun.file(path).arrayBuffer().then(buffer => new Uint8Array(buffer)) as unknown as Uint8Array
}

async function decodeContent(raw: Uint8Array, encoding: Bun.Encoding): Promise<string> {
    return new TextDecoder(encoding).decode(raw)
}

const raw = readRaw('data.txt')
const content = await decodeContent(raw, 'utf-8')
const trimmed = content.trim()


/** Deep Module */

async function readBytes(path: string): Promise<Uint8Array> {
    const buffer = await Bun.file(path).arrayBuffer()
    return new Uint8Array(buffer)
}

function decode(encoding: Bun.Encoding): (raw: Uint8Array) => string {
    return (raw: Uint8Array) => new TextDecoder(encoding).decode(raw)
}

const stripWhitespace = (content: string): string => content.trim()

function makeReader(enconding: Bun.Encoding): (path: string) => Promise<string> {
    return async (path: string) => {
        const raw = await readBytes(path)
        return stripWhitespace(decode(enconding)(raw))
    }
}

const readUtf8 = makeReader('utf-8')
const readUtf16 = makeReader('utf-16')

const contentUtf8 = await readUtf8('data.txt')