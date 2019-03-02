#!/bin/bash
OUT_DIR=`realpath ./src/protogen`
PROTOC_GEN_TS_PATH=`realpath ./node_modules/.bin/protoc-gen-ts`
mkdir -p ${OUT_DIR}

INCLUDE_PATH=""
for service in `realpath ./src/proto/MicroVision-proto/*/`
do
  INCLUDE_PATH="${INCLUDE_PATH} -I ${service} "
done

for service in `realpath ./src/proto/MicroVision-proto/*/`
do
cd ${service}
protoc \
  --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
  ${INCLUDE_PATH} \
  --ts_out=service=true:${OUT_DIR} \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  *.proto
done
