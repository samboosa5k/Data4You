#!/bin/bash

echo Find directory:

read search_input



folder_array = find -name "*$search_input*" -type d



printf $folder_array



bash