SHELL := /bin/bash
DOCKER ?= docker
NPM ?= npm
NG ?= ng
GRADLEW ?= ./gradlew
IMAGE_NAME := 'phoenix-ui'
CONTAINER_NAME := 'phoenix-service-ui'
USERNAME := 'bsgfb'

NPM_INSTALL := ${NPM} install
NG_BUILD := ${NG} build --prod
DOCKER_BUILD := ${DOCKER} build -t ${IMAGE_NAME} .
DOCKER_RUN := ${DOCKER} run -it --rm --name ${CONTAINER_NAME} -p 80:80 -d ${IMAGE_NAME}

build:
	${NPM_INSTALL}
	${NG_BUILD}
	${DOCKER_BUILD}

run:
	${DOCKER_RUN}

full:
	${NG_BUILD}
	${DOCKER_BUILD}
	${DOCKER_RUN}

stop:
	${DOCKER} stop ${CONTAINER_NAME}

push:
	${NPM_INSTALL}
	${NG_BUILD}
	${DOCKER_BUILD}
	${DOCKER} tag ${IMAGE_NAME} ${USERNAME}/${IMAGE_NAME}
	${DOCKER} push ${USERNAME}/${IMAGE_NAME}
