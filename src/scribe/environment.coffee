#
# The Environment class provides static data about the process
# environment: arguments, environment vars, cwd, etc.
#
class Scribe.Environment

  # @property [String]
  #
  # The current working directory
  @cwd: null

  # @property [Array<String>]
  #
  # The process arguments
  @argv: []

  # @property [Object]
  #
  # The environment variables
  @env: {}

  # @property [String]
  #
  # The platform. Will be one of
  @platform: null

do ->

  # Make some property lookups call "magic" getter/setter methods
  # that will be implemented by the Platform
  Scribe.Mixins.GetterSetters.mixin(Scribe.Environment, [
    'cwd'
    'argv'
    'env'
  ])