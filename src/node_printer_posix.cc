#include "node_printer.hpp"

#include <string>
#include <map>
#include <utility>
#include <sstream>
#include <node_version.h>

#include <cups/cups.h>
#include <cups/ppd.h>

MY_NODE_MODULE_CALLBACK(WritePath)
{
    MY_NODE_MODULE_HANDLESCOPE;
    RETURN_EXCEPTION_STR("Function not available on POSIX");
}

MY_NODE_MODULE_CALLBACK(ReadPath)
{
    MY_NODE_MODULE_HANDLESCOPE;
    RETURN_EXCEPTION_STR("Function not available on POSIX");
}