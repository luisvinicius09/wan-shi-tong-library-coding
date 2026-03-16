/** Shallow Module */

// class FileReader:
//     def open_file(self, path):
//         self.f = open(path, 'rb')

//     def read_chunk(self, buffer, offset, length, encoding):
//         self.f.seek(offset)
//         raw = self.f.read(length)
//         return raw.decode(encoding)

//     def close_file(self):
//         self.f.close()

class FileReaderShallow {
        private file: Bun.BunFile | undefined;

        constructor() {
            this.file = undefined;
        }

        openFile(path: string) {
                this.file = Bun.file(path)
        }
        readChunk(offset: number, length: number) {
                return this.file?.slice(offset, length).toString()
        }
        closeFile() {
                this.file = undefined;
        }
}


/** Deep Module */

class FileReaderDeep {
        private file: Bun.BunFile

        constructor(path: string) {
                this.file = Bun.file(path)
        }

        read(start: number = 0, length: number = 0) {
                return this.file.slice(start, length).toString()
        }
}
