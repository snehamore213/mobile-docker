//
//  RNConfig.m
//  myApp
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if Debug
  NSString *env=@"dev";
#elif DEBUG
  NSString *env=@"dev";
#elif QA
  NSString *env=@"qa";
#else
  NSString *env=@"prod";
#endif
  return @{ @"env":env};
}
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end
