import os
import sys
import glob
import subprocess
BASE_PATH = os.path.dirname(__file__)
OUT_DIR=os.path.realpath(os.path.join(BASE_PATH, "src", "protogen"))
SRC_DIR=os.path.realpath(os.path.join(BASE_PATH, "src", "proto", "MicroVision-proto"))
PROTOC_GEN_TS_PATH=os.path.realpath(os.path.join(BASE_PATH, "node_modules", ".bin","protoc-gen-ts" + (".cmd" if os.name=="nt" else "")))

os.makedirs(OUT_DIR, exist_ok=True)
INCLUDE_PATH=[]

PROTOBUF_INCLUDE = os.environ.get("PROTOBUF_INCLUDE")
if PROTOBUF_INCLUDE:
  INCLUDE_PATH.extend(['-I', PROTOBUF_INCLUDE])

for service in glob.glob(os.path.join(SRC_DIR, "*/")):
  INCLUDE_PATH.append("-I")
  INCLUDE_PATH.append(service)

cmd = ['protoc', f'--plugin=protoc-gen-ts={PROTOC_GEN_TS_PATH}']
cmd.extend(INCLUDE_PATH)
cmd.extend([
  f'--ts_out=service=true:{OUT_DIR}',
  f'--js_out=import_style=commonjs,binary:{OUT_DIR}'
  ])
for service in glob.glob(os.path.join(SRC_DIR, "*/*.proto")):
  _cmd = cmd.copy()
  _cmd.append(service)
  cmdtxt = " ".join(_cmd)
  print(cmdtxt)
  subprocess.run(_cmd, shell=False, cwd=os.path.dirname(service))
