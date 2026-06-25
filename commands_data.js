const allCommands = {
    "moderation": [
        {
            "name": "ban",
            "description": "Ban a user from the server",
            "arguments": "<user> [reason]",
            "permissions": "Ban Members"
        },
        {
            "name": "kick",
            "description": "Kick a user from the server",
            "arguments": "<user> [reason]",
            "permissions": "Kick Members"
        },
        {
            "name": "timeout",
            "description": "Timeout a user (e.g. 10m, 1h, 7d)",
            "arguments": "<user> <duration> [reason]",
            "permissions": "none"
        },
        {
            "name": "warn",
            "description": "Warn a user",
            "arguments": "<user> <reason>",
            "permissions": "Manage Messages"
        },
        {
            "name": "warnings",
            "description": "View a user's warnings",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "clearwarnings",
            "description": "Clear all warnings for a user",
            "arguments": "<user>",
            "permissions": "Manage Messages"
        },
        {
            "name": "delwarn",
            "description": "Delete a specific warning by ID",
            "arguments": "<warning_id>",
            "permissions": "Manage Messages"
        },
        {
            "name": "purge",
            "description": "Delete a number of recent messages",
            "arguments": "<amount>",
            "permissions": "Manage Messages"
        },
        {
            "name": "antinuke",
            "description": "Toggle the antinuke system",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "antiraid",
            "description": "Toggle the antiraid system",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "setup",
            "description": "Automated server setup for moderation logs and jail channel",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "jail",
            "description": "Strips roles and locks a user in the jail channel",
            "arguments": "<user> [reason]",
            "permissions": "Manage Roles"
        },
        {
            "name": "unjail",
            "description": "Restores a user's original roles",
            "arguments": "<user>",
            "permissions": "Manage Roles"
        },
        {
            "name": "unban",
            "description": "Unbans a user via ID",
            "arguments": "<user_id> [reason]",
            "permissions": "Ban Members"
        },
        {
            "name": "softban",
            "description": "Bans and immediately unbans to clear messages",
            "arguments": "<user> [reason]",
            "permissions": "Ban Members"
        },
        {
            "name": "mute",
            "description": "Mutes a member in text/voice",
            "arguments": "<user> [reason]",
            "permissions": "Manage Roles"
        },
        {
            "name": "unmute",
            "description": "Unmutes a member",
            "arguments": "<user>",
            "permissions": "Manage Roles"
        },
        {
            "name": "banall",
            "description": "Bans every single user currently in the server jail",
            "arguments": "[reason]",
            "permissions": "Ban Members"
        },
        {
            "name": "multiban",
            "description": "Bans multiple users simultaneously using a list of user IDs",
            "arguments": "[user_ids...]",
            "permissions": "Ban Members"
        },
        {
            "name": "multikick",
            "description": "Kicks multiple users simultaneously using a list of user IDs",
            "arguments": "[user_ids...]",
            "permissions": "Kick Members"
        },
        {
            "name": "hardban",
            "description": "Bans a user and doesn't let them get unbanned (owner / admin only)",
            "arguments": "<user> [reason]",
            "permissions": "Ban Members"
        },
        {
            "name": "hide",
            "description": "Strips Read Messages permission for @everyone in the channel",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "unhide",
            "description": "Restores Read Messages permission for @everyone in the channel",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "nuke",
            "description": "Deletes and recreates the channel with identical settings",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "history",
            "description": "Shows an overview of bans, kicks, and jails for a member",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "snipe",
            "description": "Snipe the latest deleted message in this channel",
            "arguments": "[index]",
            "permissions": "none"
        },
        {
            "name": "editsnipe",
            "description": "Snipe the latest edited message in this channel",
            "arguments": "[index]",
            "permissions": "none"
        },
        {
            "name": "reactionsnipe",
            "description": "Snipe the latest reaction that was removed in this channel",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "reactionhistory",
            "description": "See logged reactions that were removed from a message",
            "arguments": "<message_link>",
            "permissions": "Manage Messages"
        },
        {
            "name": "clearsnipe",
            "description": "Clear all snipe results for this channel (messages, edits, reactions)",
            "arguments": "none",
            "permissions": "Manage Messages"
        }
    ],
    "automation": [
        {
            "name": "autoresponse",
            "description": "Manage auto-responses",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "autoresponse remove",
            "description": "Remove an auto-response by ID",
            "arguments": "<response_id>",
            "permissions": "Administrator"
        },
        {
            "name": "autoresponse list",
            "description": "List all auto-responses",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "autoresponse add",
            "description": "Add a new auto-response",
            "arguments": "<content>",
            "permissions": "Administrator"
        },
        {
            "name": "autorole",
            "description": "Set a role to be given to new members automatically",
            "arguments": "<role>",
            "permissions": "Administrator"
        },
        {
            "name": "automod",
            "description": "Configure server automod settings",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "automod links",
            "description": "Toggle link blocking",
            "arguments": "<value>",
            "permissions": "Administrator"
        },
        {
            "name": "automod word",
            "description": "Manage blacklisted words",
            "arguments": "none",
            "permissions": "Administrator"
        }
    ],
    "management": [
        {
            "name": "setlog",
            "description": "No description given",
            "arguments": "<channel>",
            "permissions": "Administrator"
        },
        {
            "name": "welcome",
            "description": "Configure welcome settings",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "welcome channel",
            "description": "Set welcome channel",
            "arguments": "<channel>",
            "permissions": "Administrator"
        },
        {
            "name": "welcome message",
            "description": "Set welcome message",
            "arguments": "<message>",
            "permissions": "Administrator"
        },
        {
            "name": "goodbye",
            "description": "Configure leave settings",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "goodbye message",
            "description": "Set leave message",
            "arguments": "<message>",
            "permissions": "Administrator"
        },
        {
            "name": "goodbye channel",
            "description": "Set leave channel",
            "arguments": "<channel>",
            "permissions": "Administrator"
        },
        {
            "name": "setstarboard",
            "description": "No description given",
            "arguments": "<channel> [threshold]",
            "permissions": "Administrator"
        },
        {
            "name": "setautorole",
            "description": "No description given",
            "arguments": "<role>",
            "permissions": "Administrator"
        },
        {
            "name": "settings",
            "description": "No description given",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "prefix",
            "description": "Set the server prefix",
            "arguments": "<new_prefix>",
            "permissions": "Administrator"
        },
        {
            "name": "alias",
            "description": "Manage server aliases",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "alias add",
            "description": "Add a server command alias",
            "arguments": "<alias_name> <command_target>",
            "permissions": "Administrator"
        },
        {
            "name": "alias remove",
            "description": "Remove a server command alias",
            "arguments": "<alias_name>",
            "permissions": "Administrator"
        },
        {
            "name": "role",
            "description": "Give or remove a role from a user",
            "arguments": "<member> <role>",
            "permissions": "Manage Roles"
        },
        {
            "name": "roleinfo",
            "description": "View information about a role",
            "arguments": "<role>",
            "permissions": "none"
        },
        {
            "name": "lock",
            "description": "No description given",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "unlock",
            "description": "No description given",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "slowmode",
            "description": "No description given",
            "arguments": "<seconds> [channel]",
            "permissions": "none"
        },
        {
            "name": "embed",
            "description": "Interactive embed builder",
            "arguments": "none",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed color",
            "description": "Set side strip color of the embed",
            "arguments": "<hex_color>",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed json",
            "description": "Parse raw JSON code into embed",
            "arguments": "<data>",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed send",
            "description": "Sends compiled draft embed",
            "arguments": "none",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed desc",
            "description": "Set description body of your draft embed",
            "arguments": "<text>",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed create",
            "description": "Starts draft embed builder",
            "arguments": "none",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed footer",
            "description": "Add footer text to your draft embed",
            "arguments": "<text>",
            "permissions": "Manage Messages"
        },
        {
            "name": "embed title",
            "description": "Set title of your draft embed",
            "arguments": "<text>",
            "permissions": "Manage Messages"
        },
        {
            "name": "logs",
            "description": "Manage logging settings",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "logs channel",
            "description": "Set logging channel",
            "arguments": "<channel>",
            "permissions": "Administrator"
        },
        {
            "name": "logs toggle",
            "description": "Toggle log events",
            "arguments": "<event>",
            "permissions": "Administrator"
        },
        {
            "name": "emoji",
            "description": "Manage server emojis",
            "arguments": "none",
            "permissions": "Manage Expressions"
        },
        {
            "name": "emoji steal",
            "description": "Steal one or more custom emojis into this server",
            "arguments": "<emoji>[emoji ...]",
            "permissions": "Manage Expressions"
        },
        {
            "name": "channelinfo",
            "description": "Displays exact creation parameters and channel ID",
            "arguments": "[channel]",
            "permissions": "none"
        },
        {
            "name": "membercount",
            "description": "Displays breakdown of total members, humans, and bots",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "customize",
            "description": "Customize the bot's profile picture for this server. Use ',customize reset' to restore default.",
            "arguments": "[option_or_url]",
            "permissions": "Administrator"
        }
    ],
    "community": [
        {
            "name": "ping",
            "description": "Check the bot's latency",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "uptime",
            "description": "Check how long the bot has been online",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "invite",
            "description": "Get the bot's invite link",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "botinfo",
            "description": "Get information about the bot",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "userinfo",
            "description": "Get information about a user",
            "arguments": "[member]",
            "permissions": "none"
        },
        {
            "name": "serverinfo",
            "description": "Get information about the server",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "avatar",
            "description": "Get a user's avatar",
            "arguments": "[member]",
            "permissions": "none"
        },
        {
            "name": "banner",
            "description": "Get a user's banner",
            "arguments": "[member]",
            "permissions": "none"
        },
        {
            "name": "invites",
            "description": "Shows the server invite leaderboard",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "userinvites",
            "description": "Shows how many people a specific user has invited",
            "arguments": "[user]",
            "permissions": "none"
        },
        {
            "name": "boosters",
            "description": "Displays a list of all active server nitro boosters",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "names",
            "description": "Displays historical nickname changes for a user",
            "arguments": "[user]",
            "permissions": "none"
        },
        {
            "name": "afk",
            "description": "Set your AFK status with an optional message",
            "arguments": "[reason]",
            "permissions": "none"
        }
    ],
    "economy": [
        {
            "name": "open",
            "description": "Open a bank account",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "balance",
            "description": "Check your or someone else's balance",
            "arguments": "[user]",
            "permissions": "none"
        },
        {
            "name": "daily",
            "description": "Claim your daily reward",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "work",
            "description": "Work to earn some coins",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "deposit",
            "description": "Deposit coins into your bank",
            "arguments": "<amount>",
            "permissions": "none"
        },
        {
            "name": "withdraw",
            "description": "Withdraw coins from your bank",
            "arguments": "<amount>",
            "permissions": "none"
        },
        {
            "name": "pay",
            "description": "Pay someone coins from your wallet",
            "arguments": "<user> <amount>",
            "permissions": "none"
        },
        {
            "name": "rob",
            "description": "Attempt to rob someone's wallet",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "leaderboard",
            "description": "View the top wealthiest users",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "givemoney",
            "description": "Spawn money into someone's account (owner only)",
            "arguments": "<user> <amount>",
            "permissions": "none"
        }
    ],
    "casino": [
        {
            "name": "gamble",
            "description": "bet your coins on a random 1-100 roll",
            "arguments": "<amount>",
            "permissions": "none"
        },
        {
            "name": "slots",
            "description": "spin the slot machine",
            "arguments": "<amount>",
            "permissions": "none"
        },
        {
            "name": "blackjack",
            "description": "play a game of blackjack against the dealer",
            "arguments": "<amount>",
            "permissions": "none"
        },
        {
            "name": "roulette",
            "description": "bet on the roulette wheel",
            "arguments": "<amount> <space>",
            "permissions": "none"
        },
        {
            "name": "mines",
            "description": "play mines to multiply your coins",
            "arguments": "<amount> [mines]",
            "permissions": "none"
        },
        {
            "name": "scratch",
            "description": "Buys a scratch-off card for 500 coins",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "dice",
            "description": "Rolls two dice for cash (bet against the bot)",
            "arguments": "<amount>",
            "permissions": "none"
        }
    ],
    "social": [
        {
            "name": "roblox",
            "description": "Look up a Roblox user by username",
            "arguments": "<username>",
            "permissions": "none"
        },
        {
            "name": "github",
            "description": "Look up a GitHub user by username",
            "arguments": "<username>",
            "permissions": "none"
        },
        {
            "name": "x",
            "description": "Look up an X/Twitter profile",
            "arguments": "<username>",
            "permissions": "none"
        }
    ],
    "voicemaster": [
        {
            "name": "voicemaster",
            "description": "voicemaster system commands",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "voicemaster setup",
            "description": "setup the join to create voice channel system",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "vc",
            "description": "Voice channel controller",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "vc limit",
            "description": "Set user limit for your channel",
            "arguments": "<limit>",
            "permissions": "none"
        },
        {
            "name": "vc unlock",
            "description": "Unlock your temporary voice channel",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "vc claim",
            "description": "Claim ownership of empty voice channel",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "vc reject",
            "description": "Reject user from voice channel",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "vc lock",
            "description": "Lock your temporary voice channel",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "vc name",
            "description": "Change voice channel name",
            "arguments": "<name>",
            "permissions": "none"
        },
        {
            "name": "vc permit",
            "description": "Permit user to join locked channel",
            "arguments": "<user>",
            "permissions": "none"
        }
    ],
    "vanity": [
        {
            "name": "vanity",
            "description": "vanity reward system commands",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "vanity role",
            "description": "set the role to give to users with the vanity text",
            "arguments": "<role>",
            "permissions": "Administrator"
        },
        {
            "name": "vanity message",
            "description": "set the thank-you message",
            "arguments": "<text>",
            "permissions": "Administrator"
        },
        {
            "name": "vanity set",
            "description": "set the vanity text to check for in custom statuses",
            "arguments": "<text>",
            "permissions": "Administrator"
        },
        {
            "name": "vanity channel",
            "description": "set the channel for thank-you messages",
            "arguments": "<channel>",
            "permissions": "Administrator"
        }
    ],
    "fun": [
        {
            "name": "coinflip",
            "description": "Flip a coin",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "roll",
            "description": "Roll a dice (1-6)",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "ship",
            "description": "Calculate the compatibility between two users",
            "arguments": "<user1> [user2]",
            "permissions": "none"
        },
        {
            "name": "howgay",
            "description": "Check how gay a user is",
            "arguments": "[member]",
            "permissions": "none"
        },
        {
            "name": "ppsize",
            "description": "Check a user's pp size",
            "arguments": "[member]",
            "permissions": "none"
        },
        {
            "name": "joke",
            "description": "Tell a random joke",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "8ball",
            "description": "Ask the magic 8 ball a question",
            "arguments": "<question>",
            "permissions": "none"
        },
        {
            "name": "rps",
            "description": "Play rock paper scissors against the bot",
            "arguments": "<choice>",
            "permissions": "none"
        },
        {
            "name": "blacktea",
            "description": "Starts a word elimination game",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "poll",
            "description": "Creates a quick reaction poll",
            "arguments": "<question>",
            "permissions": "none"
        },
        {
            "name": "quote",
            "description": "Quotes a user's message",
            "arguments": "<member> <text>",
            "permissions": "none"
        }
    ],
    "tickets": [
        {
            "name": "ticket",
            "description": "Ticket system management",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "ticket close",
            "description": "Close this ticket",
            "arguments": "[reason]",
            "permissions": "none"
        },
        {
            "name": "ticket add",
            "description": "Add a user to this ticket channel",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "ticket setup",
            "description": "Configure the ticket system interactively",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "ticket reset",
            "description": "Wipe all ticket data and config for this server",
            "arguments": "none",
            "permissions": "Administrator"
        },
        {
            "name": "ticket rename",
            "description": "Rename this ticket channel",
            "arguments": "<name>",
            "permissions": "none"
        },
        {
            "name": "ticket limit",
            "description": "Set the max number of open tickets per user",
            "arguments": "<n>",
            "permissions": "Administrator"
        },
        {
            "name": "ticket stats",
            "description": "Show ticket statistics for this server",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "ticket remove",
            "description": "Remove a user from this ticket channel",
            "arguments": "<user>",
            "permissions": "none"
        },
        {
            "name": "ticket panel",
            "description": "Post the ticket panel in a channel",
            "arguments": "[channel]",
            "permissions": "Administrator"
        }
    ],
    "giveaway": [
        {
            "name": "giveaway",
            "description": "Giveaway management commands.",
            "arguments": "none",
            "permissions": "none"
        },
        {
            "name": "giveaway create",
            "description": "Start a giveaway  \u2014  e.g. ,gw create 1h 10k Robux",
            "arguments": "<duration> <prize>",
            "permissions": "Manage Server"
        },
        {
            "name": "giveaway end",
            "description": "End an active giveaway early",
            "arguments": "<message_id>",
            "permissions": "Manage Server"
        },
        {
            "name": "giveaway reroll",
            "description": "Reroll the winner of an ended giveaway",
            "arguments": "<message_id>",
            "permissions": "Manage Server"
        }
    ]
};